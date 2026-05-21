import { createFileRoute } from '@tanstack/react-router'
import CanvasEditor from '../components/CanvasEditor'

export const Route = createFileRoute('/editor')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
        <CanvasEditor/>
    </div>
    </>
  )
}
