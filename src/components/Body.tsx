import '../index.css'
import {Tasks} from './Tasks'
import {Skils} from './Skills'
import {Biography} from './Biography'
import {Values} from './Values'

export const Body = () => {

  const layer = {
    display: 'flex',
  }

  return (
    <>
      <div >
        <Values />
      </div>
      <div >
        <Skils />
      </div>
      <div>
        <Tasks />
      </div>
      <div>
        <Biography />
      </div>
    </>
  )

}
