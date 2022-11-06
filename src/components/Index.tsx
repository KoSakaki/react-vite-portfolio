import {Head} from './Head'
import {Body} from './Body'


export const Index = () => {
  // const style: { [key: string]: React.CSSProperties } = {
  //   container: {
  //     backgroundColor: '#95CCFF',
  //   }
  // }

  return (
    <div className="bg-[#95CCFF]">
      <div className="flex justify-center">
        <Head />
      </div>
      <Body />
    </div>
  )
}
