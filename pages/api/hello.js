
//req接收请求信息, res返回信息
export default (req, res) => {
  //读取next提供的环境变量
  console.log(process.env)
  res.status(200).json({ test: 'hello' })
}