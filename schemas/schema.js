import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import abouts from './abouts'
import skills from './skills'
import experiences from './experiences'
import workExperience from './workExperience'
import contact from './contact'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([works, abouts, skills, experiences, workExperience, contact
    /* Your types here! */
  ]),
})
