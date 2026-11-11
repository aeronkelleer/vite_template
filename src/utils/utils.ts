// %======================== utils ========================% //

export function generatePaths(prefix: string, names: string[], ext: string): Record<string, string> {
  return names.reduce((paths, name) => {
    const key = name.toUpperCase().replace(/-/g, '_');
    paths[key] = `${prefix}/${name}${ext}`;
    return paths;
  }, {} as Record<string, string>);
}
