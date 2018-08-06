import React from 'react'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Fale conosco</h1>

    <form acceptCharset='UTF-8' method='post'>
      <div className='field'>
        <input className='input' name='name' placeholder='*Seu nome' required='required' />
      </div>
      <div className='field'>
        <input className='input' type='email' name='email' placeholder='*Seu e-mail' required='required' />
      </div>
      <div className='field'>
        <textarea className='textarea' name='obs' rows='7' placeholder='Conte um pouco mais pra gente!' required='required'></textarea>
      </div>
      <input className='button' type='submit' value='enviar' />
    </form>
  </Layout>
)

export default Contact
