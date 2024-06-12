"use client"
import React, {useEffect, useState} from "react"
import Navbar from "./ui/Navbar"

export default function Home() {


  useEffect(() => {
    fetch("http://localhost:3001/api/usuarios").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
      }
    )
  })

  return (
    <>
    <Navbar />
    <div>
      <div className="welcome">
        <h1>Bienvenidos a BOD</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos perferendis
          ut mollitia velit dicta deserunt fugit omnis id non eos alias explicabo, totam ad illo
          repellat reiciendis. Neque, cum!</p>
      </div>
    </div>
    </>
  )
}