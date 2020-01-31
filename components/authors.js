import { Flex, Avatar, Text } from 'theme-ui'
import { trim } from 'lodash'

export default ({ text = '@lachlanjc', sx = {}, ...props }) => (
  <Flex
    {...props}
    sx={{ justifyContent: 'center', alignItems: 'center', ...sx }}
  >
    {text.includes('@') ? (
      text
        .split(',')
        .map(trim)
        .map(name => (
          <Flex
            key={name}
            as="a"
            href={`https://github.com/${name.replace('@', '')}`}
            target="_blank"
            title={`View ${name} on GitHub`}
            sx={{ alignItems: 'center', textDecoration: 'none', m: [1, 2] }}
          >
            <Avatar
              src={`https://github.com/${name.replace('@', '')}.png`}
              size={[32, 48, 64]}
              alt={name.replace('@', '')}
              sx={{ mr: 2 }}
            />
            <Text as="span" color="muted" sx={{ fontSize: [1, 2] }}>
              {name}
            </Text>
          </Flex>
        ))
    ) : (
      <Text as="span" color="muted" sx={{ fontSize: [1, 2] }}>
        {text}
      </Text>
    )}
  </Flex>
)
