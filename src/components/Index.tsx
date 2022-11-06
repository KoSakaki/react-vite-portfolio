import {Head} from './Head'
import {Body} from './Body'


export const Index = () => {
  // const style: { [key: string]: React.CSSProperties } = {
  //   container: {
  //     backgroundColor: '#95CCFF',
  //   }
  // }

  return (
    <div className="flex flex-wrap items-center justify-center bg-[#95CCFF]">
      <Head />
      <div>
        <Body />
      </div>
    </div>
  )
}
