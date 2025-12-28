import { BLOCK_MAP } from "./blockMap";

const BlockRenderer = ({ block }) => {
  if (!block || !block.enabled) return null;

  const Component = BLOCK_MAP[block.type];

  if (!Component) {
    console.warn(`[BlockRenderer] Unknown block type: ${block.type}`);
    return null;
  }

  return (
    <Component
      data={{
        ...block.data,
        id: block.id,
        enabled: block.enabled,
      }}
    />
  );
};

export default BlockRenderer;
