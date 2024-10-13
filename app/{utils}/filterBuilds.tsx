export const filterBuilds = (builds: any, filter: string, category: string) => {
  let filtered = builds;
  if (filter) {
    filtered = filtered.filter((build: any) => {
      return build.title.toLowerCase().includes(filter.toLowerCase());
    });
  }
  if (category) {
    filtered = filtered.filter((build: any) => {
      return build.category.toLowerCase() === category.toLowerCase();
    });
  }
  return filtered;
};