"use client"
import { useEffect, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { cn } from "@/lib/utils";
import Sidebar from "../Sidebar";
import MessageContainer from "./MessageContainer";


interface ChatLayoutProps{
    defaultLayout: number[] | undefined;
}

const ChatLayout = ({defaultLayout=[320,480]}:ChatLayoutProps) => {
    const [isMobile,setIsMobile] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);  

    useEffect(()=>{
        const checkSceenWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        checkSceenWidth();
        window.addEventListener('resize',checkSceenWidth);

        return () => {
            window.removeEventListener('resize',checkSceenWidth);
        }
    },[])

  return (
    <ResizablePanelGroup
    direction="horizontal"
    className="h-full items-stretch bg-background rounded-lg"
    onLayout={(sizes:number[])=>{
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
    }}
    >
        <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={isMobile? 0 : 24}
        maxSize={isMobile? 8 : 30}
        onCollapse={()=>{
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=true`;
        }}
        onExpand={()=>{
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=false`;
        }}
        className={cn(isCollapsed && "min-w-[80px] transition-all duration-300 ease-in-out")}
        >
            <Sidebar isCollapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
        defaultSize={defaultLayout[1]}
        minSize={30}
        >
            {/* <div className="flex justify-center items-center h-full w-full px-10">
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-muted-foreground text-center">Click on a chat to view the messaeges</p>
                </div>
            </div> */}
            <MessageContainer/>
        </ResizablePanel>
        

    </ResizablePanelGroup>
  )
}

export default ChatLayout;