import React, { useCallback, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { getGists, gistsSelector, gistsByNameSelector, getGistsByName } from "../../store/gists";
import { useDispatch, useSelector } from "react-redux";

// const API_GISTS = "https://api.github.com/gists"

const useGists = () => {
   const [gists, setGists] = useState(null)
   const [pending, setPending] = useState(false)
   const [error, setError] = useState(null)

   const getGists = useCallback(async () => {
      setPending(true)
      try {
         const result = await fetch("API_GISTS")

         if (!result.ok) {
            throw Error("Error")
         }

         const data = await result.json()


         setGists(data)
      } catch (e) {
         setError(e)
      }
      finally {
         setPending(false)
      }

   }, [])

   useEffect(() => { getGists() }, [getGists])
   return {
      gists,
      pending,
      error,
   }
}


export function Gists() {
   // const { gists, pending, error } = useGists()



   const dispatch = useDispatch()
   const { gists, gistError, gistPending } = useSelector(gistsSelector)
   const { gistsByName, gisByNameError, gistByNamePending } = useSelector(gistsByNameSelector)

   useEffect(() => {
      if (!gists.length) {
         dispatch(getGists())
      }

   }, [dispatch, gists])

   useEffect(() => {
      if (!gistsByName.length) {
         dispatch(getGistsByName("bogdanq"))
      }

   }, [dispatch, gistsByName])

   if (gistPending) {
      return <h2>loading ...</h2>
   }
   if (gistError) {
      return <h2>error ...</h2>
   }

   if (gistByNamePending) {
      return <h2>loading  gistByNamePending...</h2>
   }
   if (gisByNameError) {
      return <h2>gisByNameError ...</h2>
   }

   return (
      <div>
         <h2>Gists</h2>


         {gists?.map((gist) => (<h5 key={gist.url}>{gist.url}</h5>))}
         <button onClick={() => dispatch(getGists(1))}>1</button>
         <button onClick={() => dispatch(getGists(2))}>2</button>
         <button onClick={() => dispatch(getGists(3))}>3</button>
         <hr />

         {gistsByName?.map((gist) => (<h5 key={gist.url}>{gist.url}</h5>))}


         <Button size="large" variant="contained" href="/chat">go to Chat</Button>
         <Button size="large" variant="contained" href="/profile">go to Profile</Button>


      </div >
   );
}