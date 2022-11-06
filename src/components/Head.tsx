import face from '../assets/imagef.png';

export const Head = () => {
  const style: {[key: string]: React.CSSProperties} = {
    divStyle: {
      color: 'blue',
      position: 'absolute',
      left: '50%',
      bottom: '5%',
    },
    faceImage: {
       borderRadius: '50% 50%',
    }
  }

  return (
    <div className="text-3xl font-bold underline flex justify-center relative">
      <img src={face} style={style.faceImage} />
      <p className="divStyle" style={style.divStyle}>Koya Sakaki</p>
    </div>
  )


}
