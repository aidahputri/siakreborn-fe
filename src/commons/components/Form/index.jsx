import React from 'react'

const Form = props => {
  const { title, id_name, children } = props

  return (
    <div className="max-w-full prose">
      <h2 className="h2">{title}</h2>
      <form className="bg-white card shadow-xl max-w-full" id={id_name} {...props}>
        <div className="card-body">
          <div className="space-y-4 flex flex-col gap-2">{children}</div>
        </div>
      </form>
    </div>
  )
}

export default Form