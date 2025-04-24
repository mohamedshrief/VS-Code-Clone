import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
    defaultLayout?: number[] | undefined;
    leftPanel: ReactNode;
    rightPanel: ReactNode;

}


export default function ResizablePanel({ leftPanel, rightPanel, defaultLayout = [25, 75], }: IProps) {

    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
    };
    return (
        <PanelGroup direction="horizontal" onLayout={onLayout}>
            <Panel defaultSize={defaultLayout[0]} className="bg-[#171520]" >
                {leftPanel}
            </Panel>

            <PanelResizeHandle className="border-s-2 border-gray-500/50" />
            <Panel defaultSize={defaultLayout[1]} className="bg-[#262335]" >
                {rightPanel}
            </Panel>
        </PanelGroup>
    )
}