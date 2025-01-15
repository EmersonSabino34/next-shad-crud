'use client'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function EditarPerfil(){
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");

    function validar(event: any){
        event.preventDefault()

        if(name === ""){
            alert('Por favor digite o seu nome!')
            return
        }

        if(userName === ""){
            alert('Por favor digite o um apelido')
            return
        }

        alert('Cadastro realizado com sucesso!')
        setName("")
        setUserName("")
    }

  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Deseja atualizar o perfil
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" className="col-span-3" 
                value={name} onChange={ e => setName(e.target.value) }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Nome do usuário
            </Label>
            <Input id="username" className="col-span-3" 
                value={userName} onChange={ e => setUserName(e.target.value) }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={validar}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}