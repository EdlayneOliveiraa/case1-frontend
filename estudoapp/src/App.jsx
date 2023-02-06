import { Table, Container, Button } from 'react-bootstrap'
import ContentsApi from './api/CmsApi'
import { useEffect, useState } from 'react'
import CreateContentModal from './components/Modal'

function App() {
  const [contents, setContents] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  useEffect(() => {
    async function getData() {
      await ContentsApi().getContents().then(data => {
        return data.json()
      })
      .then(data => {
        setContents(data)
      })
    }

    getData()
  }, [])

  async function deleteContent(contentId) {
    try {
      await ContentsApi().deleteContent(contentId)

      const formattedContents = contents.filter(cont => {
        if(cont.id !== contentId){
          return cont
        }
      })

      setContents(formattedContents)
    } catch(err) {
      throw err
    }
  }

  async function createContent(event) {
    try {
      event.preventDefault()

      const req = event.currentTarget.elements

      const response = await ContentsApi().createContent(
        req.titulo.value, req.descricao.value, Number(req.porcentagem.value)
      )

      const filteredContent = contents.push({
        id: response.data.contentId,
        titulo: req.titulo.value,
        descricao: req.descricao.value,
        porcentagem: Number(req.porcentagem.value)
      })

      setContents(filteredContent)
    } catch(err) {
      throw err
    }
  }

  return(
    <>
    <Container
      className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
    >
      <Button
        className="mb-2"
        onClick={handleShow}
        variant='primary'>
        Criar Conteúdo
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Porcentagem</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {contents && contents.map(cont => (
            <tr key={cont.id}>
              <td>{cont.titulo}</td>
              <td>{cont.descricao}</td>
              <td>{cont.porcentagem}</td>
              <td>
                <Button onClick={() => deleteContent(cont.id)} variant='danger'>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    <CreateContentModal isModalOpen={isModalOpen} handleClose={handleClose} createContent={createContent} />
    </>
  )
}

export default App
