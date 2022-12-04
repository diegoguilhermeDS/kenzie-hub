import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { api } from '../../services/api'
import { StyledContainer } from '../../styles/container'
import { StyledText } from '../../styles/typography'
import { StyledSectionInforUser, StyledSectionMessage } from './style'
import { motion } from "framer-motion"

const DashBoard = () => {
  const [userCurrent, setUserCurrent] = useState('')

  const token = JSON.parse(localStorage.getItem("@Token"))
  const id = JSON.parse(localStorage.getItem("@UserId"))

  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/login")
    } else {
      async function getUser() {
        const user = await api.get(`/users/${id}`)
        setUserCurrent(user.data)
      }

      getUser()
    }
  }, [token, id])

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.75}}
    >
      <Header/>
      <main>
        <StyledSectionInforUser>
          <StyledContainer className='containerSectionInforUser'>
            <StyledText tag="h1" children={`Olá, ${userCurrent.name}`} fontSize="1" fontWeight={700}/>
            <StyledText tag="span" children={`${userCurrent.course_module}`} fontSize="4" colorText="grey-1"/>
          </StyledContainer>
        </StyledSectionInforUser>

        <StyledSectionMessage>
          <StyledContainer className='containerMessageDeveloper'>
            <StyledText tag="h1" children={"Que pena! Estamos em desenvolvimento :("} fontSize="1" fontWeight={700}/>
            <StyledText tag="span" children={"Nossa aplicação está em desenvolvimento, em breve teremos novidades"} fontSize="2" />
          </StyledContainer>
        </StyledSectionMessage>
      </main>
    </motion.div>
  )
  
}

export default DashBoard