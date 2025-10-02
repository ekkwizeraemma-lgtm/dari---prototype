import dynamic from 'next/dynamic'
const DariPrototype = dynamic(() => import('@/components/DariPrototype'), { ssr: false })
export default function Home() { return (<main><DariPrototype /></main>) }
