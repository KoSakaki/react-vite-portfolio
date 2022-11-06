import '../index.css'
import {Tasks} from './items/Tasks'
import {Skils} from './items/Skills'
import {Biography} from './items/Biography'
import {Values} from './items/Values'

export const Body = () => {

  const layer = {
    display: 'flex',
  }

  return (
    <>
      <Values />
      <Skils />
      <Tasks />
    </>
  )

}
