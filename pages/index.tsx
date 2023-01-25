import { Button, Htag } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
     <Htag tag='h1'>Header</Htag>
     <Button appearance="primary">кнопка левая</Button>
     <Button appearance="ghost">кнопка правая</Button>
    </>
  )
}
