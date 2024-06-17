"use client";
import React, { useState ,ChangeEvent, FormEvent, useCallback} from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [roomCode, setRoomCode] = useState("");

  const handleFormSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   router.push(`/room/${roomCode}`)

  },[router , roomCode])

  return (
    <div className="">
      <form onSubmit={handleFormSubmit}>
        <div className=" flex items-center gap-3">
          <label>Room</label>
          <input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            placeholder="Enter room code"
            className="px-2 border"
          />
          <button type="submit" className="bg-blue-600 px-2 rounded-lg">
            Enter Room
          </button>
        </div>
      </form>
    </div>
  );
}
