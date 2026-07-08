import React from 'react'
import { CgEnter } from 'react-icons/cg'
import { Form , Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Register = () => {
  return (
    <section className='min-h-screen grid place-items-center'>
      <Form method='post' className='card w-96 p-8 bg-base-100 flex flex-col gap-y-4 shadow-lg'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput label="username" type="text" name="username" />
        <FormInput label="email" type="email" name="email" />
        <FormInput label="password" type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
                <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="link ml-2 link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
