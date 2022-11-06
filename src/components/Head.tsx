import face from '../assets/imagef.png';

export const Head = () => {
  const divStyle = {
    color: 'blue',
    position: 'absolute',
    left: '50%',
    bottom: '5%',
  };
  const faceImage = {
    'border-radius': '50% 50%',
  }

  return (
    <div className="text-3xl font-bold underline flex justify-center relative">
      <img src={face} style={faceImage} />
      <p className="divStyle" style={divStyle}>Koya Sakaki</p>
    </div>
  )


}
