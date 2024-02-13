import {LinkMeta} from '../models/artifact-meta-models.ts';
import {Avatar, Card, CardActionArea, CardContent, CardMedia, Link, Stack, Typography} from '@mui/material';

/**
 * Content of a link.
 * @param title The title of the link.
 * @param description The description of the link.
 * @param faviconSrc The favicon of the link.
 * @param domain The domain of the link.
 * @constructor
 */
function LinkContent({title,  description, faviconSrc, domain}: { title: string; description: string; faviconSrc: string; domain: string }) {
  return (
    <CardContent>
      <Stack spacing={2}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          {faviconSrc && <Avatar src={faviconSrc} />}
          <Link href={`https://${domain}`}>{domain}</Link>
        </Stack>
      </Stack>
    </CardContent>
  );
}

/**
 * Rich representation of a link.
 * @param linkMeta The metadata of the link.
 * @constructor
 */
function LinkCard({ linkMeta }: { linkMeta: LinkMeta }) {
  return (
    <Link href={linkMeta.url} underline={'none'}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {linkMeta.imageSrc && (
            <CardMedia component={'img'} height={180} image={linkMeta.imageSrc} alt={linkMeta.title} />
          )}
          <LinkContent
            title={linkMeta.title}
            description={linkMeta.description}
            faviconSrc={linkMeta.faviconSrc}
            domain={linkMeta.domain}
          />
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default LinkCard;
