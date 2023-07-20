'use client'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const Dashbord = () => {
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     })
  //     if (!res.ok) {
  //       setErr(true)
  //     }

  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])
  //in body map over data and do what's desired .

  //using swr
  // const fetcher = (...args) => fetch(...args).then((res) => res.json())
  // const { data, error, isLoading } = useSWR(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   fetcher
  // )

  const session = useSession()
  console.log(session, 'session')

  return <div>Dashbord</div>
}

export default Dashbord
