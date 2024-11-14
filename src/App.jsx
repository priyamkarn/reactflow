import { useState, useCallback } from 'react'; // <-- Import useCallback here
import './App.css';
import { ReactFlow, Background, Controls, ReactFlowProvider, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label: 'edge1' }];

function App() {
  const [variant, setVariant] = useState('dots');
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Handle changes for nodes
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  // Handle changes for edges
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Wrap with ReactFlowProvider */}
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}  // Update nodes state here
          edges={edges}  // Update edges state here
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        >
          <Background variant={variant} color='red' gap={12} />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
