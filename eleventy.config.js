/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

export default async function (eleventyConfig) {
  // Import filters
  const {dateFilter, w3DateFilter} = await import('./src/_data/filters.js');
  
  // Add filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  // Watch targets
  eleventyConfig.addWatchTarget('./src/*');
  
  // Static assets
  eleventyConfig.addPassthroughCopy('src/*.{css,js,jpg,ico}');

  // Collections
  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./src/blog/*.md');
  });

  eleventyConfig.addCollection('projects', collection => {
    return collection.getFilteredByGlob('./src/projects/*.md');
  });

  return {
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      data: '_data'
    }
  };
}