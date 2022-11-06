

export const Skils = () => {
  const skillSets: string[] = ['PHP', 'javascript(Vue.js, jQuery, React)', 'MySQL', 'Azure', 'Apache', 'Docker', 'github Actions'];
  return (
    <>
      <h1 className="flex justify-center">Skills</h1>
      <div className="flex justify-center item-center flex-wrap">
        {skillSets.map((element, index) => (
          index===skillSets.length-1 ? <h2>{element} </h2>: <h2>{element},　</h2>
        ))}
      </div>
    </>
  )
}
