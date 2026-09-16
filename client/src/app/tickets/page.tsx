import Skeleton from '@/components/skeleton/Skeleton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chamados',
}

export default function Page() {
  return (
    <>
      <Skeleton title='Meus chamados' back='/'>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora assumenda consectetur accusamus error unde in, molestias maiores aliquam iusto, saepe fugiat at dicta corrupti porro iste quod cum! Nobis?
        </div>
      </Skeleton>
    </>
  )
}