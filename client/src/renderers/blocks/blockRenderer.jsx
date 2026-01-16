import { BLOCK_MAP } from "./blockMap";

const BlockRenderer = ({
  variant, 
  size, 
  block, 
  ui, 
  handlers,
  state,
}) => {
  if (!block || !block.enabled) return null;

  const Component = BLOCK_MAP[block.type];

  if (!Component) {
    console.warn(`[BlockRenderer] Unknown block type: ${block.type}`);
    return null;
  }

  return (
    <Component
      variant={variant}
      size={size}
      data={{
        ...block.data,
        id: block.id,
        enabled: block.enabled,
      }}
      block={block}
      ui={ui}
      handlers={handlers}
      state={state}
    />
  );
};

export default BlockRenderer;
