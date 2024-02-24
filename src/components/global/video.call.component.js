import React , {useEffect}from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate } from "react-router-dom";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import jwt_decode from "jwt-decode";
export const VideoCallComponent = (props) => {
            const { id } = useParams();
            const user = jwt_decode(localStorage.getItem("userToken"));
              useEffect(() => {
                const apiKey = process.env.REACT_APP_VIDEOSDK_API_KEY;
                const meetingId = `${id}`;
                // const name = "Demo User";
            
                const config = {
                  name: user.data.name,
                  meetingId: meetingId,
                  apiKey: "d9c4125e-2d62-4d41-91df-48d6e8062397",
            
                  containerId: null,
                  redirectOnLeave: "https://www.videosdk.live/",
            
                  micEnabled: true,
                  webcamEnabled: true,
                  participantCanToggleSelfWebcam: true,
                  participantCanToggleSelfMic: true,
            
                  chatEnabled: true,
                  screenShareEnabled: true,
                  pollEnabled: true,
                  whiteboardEnabled: true,
                  raiseHandEnabled: true,
            
                  recordingEnabled: true,
                  recordingEnabledByDefault: false,
                  recordingWebhookUrl: "https://www.videosdk.live/callback",
                  recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
            
                  brandingEnabled: true,
                  brandLogoURL: "https://picsum.photos/200",
                  brandName: "Awesome startup",
            
                  participantCanLeave: true, // if false, leave button won't be visible
            
                  livestream: {
                    autoStart: true,
                    outputs: [
                      {
                        url: "rtmp://x.rtmp.youtube.com/live2",
                        streamKey: "<STREAM KEY FROM YOUTUBE>",
                      },
                    ],
                  },
            
                  permissions: {
                    askToJoin: false, // Ask joined participants for entry in meeting
                    toggleParticipantMic: true, // Can toggle other participant's mic
                    toggleParticipantWebcam: true, // Can toggle other participant's webcam
                    removeParticipant: true, // Remove other participant from meeting
                    endMeeting: true, // End meeting for all participant
                    drawOnWhiteboard: true, // Can Draw on whiteboard
                    toggleWhiteboard: true, // Can toggle whiteboard
                    toggleRecording: true, // Can toggle recording
                  },
            
                  joinScreen: {
                    visible: true, // Show the join screen ?
                    title: "Daily scrum", // Meeting title
                    meetingUrl: window.location.href, // Meeting joining url
                  },
            
                  pin: {
                    allowed: true, // participant can pin any participant in meeting
                    layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
                  },
            
                  leftScreen: {
                    // visible when redirect on leave not provieded
                    actionButton: {
                      // optional action button
                      label: "Video SDK Live", // action button label
                      href: "https://videosdk.live/", // action button href
                    },
                  },
                };
            
                const meeting = new VideoSDKMeeting();
                meeting.init(config);
              }, []);

    return (
        <div>
                {/* im hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCallComponent)