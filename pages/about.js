
export default function about(props) {
  console.log(props.data,">>>")
  return (
    <div>about { props.name }</div>
  )
}


//服务端渲染
export async function getServerSideProps(ctx) {
  const res = await fetch('https://www.fastmock.site/mock/6f92f55a6b8b6a1bdf0a2f35dcbe01ec/data1/1')
  const data = await res.json()
  return {
    props: {
      name: 'ssr',
      data
    }
  }
}
