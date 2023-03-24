import React, { useState,useEffect } from 'react'

export default function Child() {
  //受控组件:将React中的state属性和表单元素的值建立依赖关系 再通过onChange事件与setState()结合更新state属性 就能达到控制用户输入过程中表单发生的操作 被React以这种方式控制取值的表单输入元素就叫做受控组件
  const [value,setValue]=useState("")
  useEffect(()=>{
    setValue("liziwei")
  },[])
  function onChange(e){
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return (
    <input name="username value" value={value} onChange={(e)=>{
      onChange(e)
    }}/>
  )
}
