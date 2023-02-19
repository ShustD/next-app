import { Button, Htag, Ptag, Tag } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
     <Htag tag='h1'>Header</Htag>
     <Button arrow="right" appearance="primary">кнопка левая</Button>
     <Button arrow="down" appearance="ghost">кнопка правая</Button>
     <Ptag>Medium text or default</Ptag>
     <Ptag size="large">Large text</Ptag>
     <Ptag size="small">Small text</Ptag>
     <Tag size="medium" children='medium href' color="red" href="https://github.com/ShustD" />
     <Tag size="small" children='small' color="primary" />
     <Tag size="small" children='small' color="primary" />
    </>
  )
}
