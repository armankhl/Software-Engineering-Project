const Course = (props) => {
  return(
      <div className={'bg-gray-500 flex justify-center items-center p-10 flex flex-col bases-1/4 h-96 w-full rounded-xl'}>
          <p>{props.name}</p>
          <p>{props.status}</p>

      </div>
  )
}
export default Course