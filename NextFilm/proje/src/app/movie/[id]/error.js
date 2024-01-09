"use client"
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div style={{
      height: "100%",
      display: "flex",
      alignItems: 'center',
      justifyContent: "center",
      flexDirection:"column",     
    }}
    >
      <h1>
        Oops bir hata oluştu!
      </h1>
      <Link
        href="/"
        style={{textDecoration:"underline" , fontSize:20,marginTop:8}}
      >
      </Link>
    </div>
  )
}

export default error