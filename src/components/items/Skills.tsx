

export const Skils = () => {
  const skillSets: string[] = ['PHP', 'javascript(Vue.js, jQuery, React)', 'MySQL', 'Azure', 'Apache', 'Docker', 'github Actions'];
  return (
    <>
      <h1 className="flex justify-center">Skills</h1>
      <div className="block">
        {skillSets.map(element => (
          <h2>{element}</h2>
        ))}
      </div>
    </>
  )
}
