import Tasks from "./Tasks"
import { render, screen } from "@testing-library/react"
import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

describe('Tasks Component', () => {
    const handlers = [
        http.get("https://jsonplaceholder.typicode.com/todos?_limit=10", ({ params }) => {
          return HttpResponse.json({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          })
        }),
      ]
       
      const worker = setupWorker(...handlers)
      beforeAll(() => {
        worker.start()
      })

    it('should fetch and show tasks on button click', () => {
        render(<Tasks />)

        const button = screen.getByText(/Get taasks from API/i)
    })
})