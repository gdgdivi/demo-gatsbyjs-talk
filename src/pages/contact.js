import React from 'react'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h2>Fale conosco</h2>
    <form accept-charset='UTF-8' method='post'>
      <input name='name' placeholder='*Seu nome' required='required' />
      <input type='email' name='email' placeholder='*Seu e-mail' required='required' />
      <textarea name='obs' rows='7' placeholder='Conte um pouco mais pra gente!' required='required'>
      </textarea>
      <input type='submit' value='enviar' />
    </form>
  </Layout>
)

export default Contact
