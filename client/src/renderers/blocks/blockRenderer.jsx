import { BLOCK_MAP } from "./blockMap";

const BlockRenderer = ({
  customView,
  variant,
  mode,
  size,
  imageid,
  section,
  row, 
  block, 
  ui, 
  handlers,
  state,
  ...rest
}) => {
  if (!block || !block.enabled) return null;

  const viewKey = customView || block.view || block.type;

  const Component = BLOCK_MAP[viewKey];

  if (!Component) {
    console.warn(`[BlockRenderer] Unknown block type: ${block.type}`);
    return null;
  }

  return (
    <Component
      variant={variant}
      mode={mode}
      size={size}
      imageid={imageid}
      data={{
        ...block.data,
        id: block.id,
        enabled: block.enabled,
      }}
      section={section}
      row={row}
      block={block}
      ui={ui}
      handlers={handlers}
      state={state}
      {...rest}
    />
  );
};

export default BlockRenderer;
