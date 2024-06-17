"use client";
import * as React from "react";
import { useParams } from "next/navigation";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Room () {
  const { roomid }: {roomid : string} = useParams();

  const myMeeting = async (element: HTMLDivElement) => {
    const appId = 1938814673;
    const serverSecret = "f34facb4aa7b8937969368781e0a1838";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomid,
      Date.now().toString(),
      "waseem ahmed"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
      container: element,
      turnOnMicrophoneWhenJoining:true,
      turnOnCameraWhenJoining: true,
      sharedLinks:[
        {
          name: "copy link",
          url: `https://video-call-ebon-ten.vercel.app/room/${roomid}`
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      }
    })
  };
  const setRef = (element: HTMLDivElement | null) => {
      if (element) {
        myMeeting(element);
      }
    }
  return <div>
    <div ref={setRef} />
  </div>;
}
