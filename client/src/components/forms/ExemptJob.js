import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import './Form.css'

const initialValues = {
    title: '',
    salary: '',
    targetBonus: '',
    jobDescription: ''
}

const onSubmit = values => {
    console.log('Form Data', values)
}

const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    salary: Yup.number()
        .test('maxDigitsAfterDecimal',
        'number field must contain 2 decimal places or lower',
        (number) => Number.isInteger(number * (10 ** 2))
        )
        .required('Required')
})


function ExemptJob() {
    
  return (
      <div className='form-box'>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
            <div className='form-control'>
            <label htmlFor='title'>Job Title</label>
            <Field type='text' id='title' name='title' />
            <ErrorMessage name='title' component={TextError} />
            </div>

            <div className='form-control'>
            <label htmlFor='salary'>Salary</label>
            <Field type='number' pattern="^\d*(\.\d{0,2})?$" placeholder='0.00' id='salary' name='salary' />
            <ErrorMessage name='salary' component={TextError} />
            </div>

            <div className='form-control'>
            <label htmlFor='targetBonus'>Target Bonus %</label>
            <Field type='text' id='targetBonus' name='targetBonus' />
            </div>

            <div className='form-control'>
            <label htmlFor='jobDescription'>Job Description</label>
            <Field type='text' id='jobDescription' name='jobDescription' />
            </div>
            <button type='submit'>Next</button>
        </Form>
    </Formik>
    </div>
  )
}

export default ExemptJob