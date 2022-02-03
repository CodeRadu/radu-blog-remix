import { Form } from 'remix'

export default function New() {
  return (
    <div>
      <Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='form-label' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            placeholder='Title'
            maxLength={20}
            className='form-input'
            required={true}
          />
        </div>
        <div className='mb-4'>
          <label className='form-label' htmlFor='slug'>
            Slug
          </label>
          <input
            type='text'
            name='slug'
            placeholder='Slug'
            maxLength={20}
            className='form-input'
            required={true}
          />
        </div>
        <div className='mb-4'>
          <label className='form-label' htmlFor='body'>
            Body
          </label>
          <textarea
            name='body'
            placeholder='Body'
            className='form-textarea'
            required={true}
          />
        </div>
        <button type='submit' className='button'>
          Post
        </button>
      </Form>
    </div>
  )
}
