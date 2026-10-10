"""Original, deterministic pentatonic score; no external samples or recordings."""
from pathlib import Path
import wave
import numpy as np
ROOT=Path(__file__).resolve().parents[1]
SR=22050
def hz(n):return 440*2**((n-69)/12)
def tone(midi,duration,instrument):
    t=np.arange(int(duration*SR),dtype=np.float32)/SR
    freq=hz(midi)
    if instrument=='pluck':
        sound=sum((1/(k**1.3))*np.sin(2*np.pi*freq*k*t)*np.exp(-t*(1.7+k*.35)) for k in range(1,9))
        env=np.minimum(1,t/.007)*np.minimum(1,(duration-t)/.07)
    elif instrument=='flute':
        phase=2*np.pi*freq*t+.035*np.sin(2*np.pi*4.6*t)
        sound=np.sin(phase)+.18*np.sin(2*phase)+.08*np.sin(3*phase)
        env=np.minimum(1,t/.35)*np.minimum(1,(duration-t)/.45)*(.85+.15*np.sin(np.pi*t/duration))
    elif instrument=='bell':
        sound=sum(np.sin(2*np.pi*freq*k*t)*np.exp(-t*(.7+q*.3))*.6**q for q,k in enumerate([1,2.01,2.78,4.07,5.39]))
        env=np.minimum(1,t/.012)
    else:
        sound=np.sin(2*np.pi*freq*t)+.2*np.sin(2*np.pi*freq*1.003*t)+.15*np.sin(4*np.pi*freq*t)
        env=np.minimum(1,t/1.4)*np.minimum(1,(duration-t)/1.8)
    return (sound*env).astype(np.float32)
def compose(name,bpm,transpose,mode):
    beat=60/bpm;bars=32;duration=bars*4*beat;n=int(duration*SR)
    mix=np.zeros((n,2),dtype=np.float32)
    scale=[0,2,4,7,9,12,14,16]
    motifs=[[4,3,2,1,0,2,3,1],[2,4,5,4,3,2,1,0],[0,1,2,4,3,2,1,2],[5,4,3,2,4,2,1,0]]
    roots=[48,45,43,48,48,50,45,43]
    if mode=='world':
        roots=[48,43,45,50,48,45,43,48]
        motifs=[[0,2,3,4,5,4,2,1],[4,5,6,5,4,2,3,2],[3,2,1,0,1,2,4,3],[5,3,4,2,3,1,2,0]]
    elif mode=='explore':
        roots=[48,48,43,45,48,50,43,48]
        motifs=[[0,3,2,4,3,1,2,0],[3,5,4,2,3,4,5,3],[5,4,2,3,4,2,1,0],[0,2,4,3,5,4,2,3]]
    def place(at,midi,length,kind,amp,pan):
        a=tone(midi,length,kind);start=int(at*SR);end=min(n,start+len(a))
        if end<=start:return
        gain=np.array([np.cos((pan+1)*np.pi/4),np.sin((pan+1)*np.pi/4)],dtype=np.float32)
        mix[start:end]+=a[:end-start,None]*amp*gain
    for bar in range(bars):
        at=bar*4*beat;root=roots[(bar//2)%len(roots)]+transpose
        intensity=.65 if bar<4 or bar>=28 else 1
        for interval in [0,7,12]:place(at,root+interval,4*beat+.6,'pad',.025*intensity,-.35+interval/24)
        for i,interval in enumerate([0,7,12,16,12,7,9,7]):place(at+i*beat/2,root+interval,2.8,'pluck',.10*intensity*(1 if i%2==0 else .7),-.6 if i%2 else .6)
        if 4<=bar<28:
            motif=motifs[(bar//4)%4]
            for i in range(2):place(at+i*2*beat+.04,scale[motif[(bar%4)*2+i]]+60+transpose,beat*(1.7 if bar%4 else 2),'flute',.073 if mode!='explore' else .057,-.08)
        if bar%8==0:place(at,root+12,7,'bell',.05,.3)
        if mode=='explore' and bar>=8:
            for i in [0,2]:place(at+i*beat,root-12,.45,'pluck',.10,0)
        if mode=='world' and bar%2==1:place(at+3*beat,root+24,3,'bell',.03,-.4)
    wet=mix.copy()
    for delay,gain in [(.071,.17),(.113,.13),(.197,.11),(.349,.10),(.61,.08),(1.01,.055),(1.63,.03)]:
        k=int(delay*SR);wet[k:]+=mix[:-k,::-1]*gain
    wet=np.tanh(wet*1.5);wet*=.78/max(.78,float(np.max(np.abs(wet))))
    fade=int(SR*2);wet[:fade]*=np.linspace(0,1,fade)[:,None];wet[-fade:]*=np.linspace(1,0,fade)[:,None]
    pcm=(wet*32767).astype('<i2');path=ROOT/'audio'/'v3'/(name+'.wav');path.parent.mkdir(parents=True,exist_ok=True)
    with wave.open(str(path),'wb') as f:f.setnchannels(2);f.setsampwidth(2);f.setframerate(SR);f.writeframes(pcm.tobytes())
    print(f'{name}: {duration:.1f}s stereo · peak {np.max(np.abs(wet)):.3f} · RMS {np.sqrt(np.mean(wet**2)):.3f}')
for args in [('bgm_home',60,0,'home'),('bgm_world',54,2,'world'),('bgm_explore',72,-5,'explore')]:compose(*args)
