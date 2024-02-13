import { LinkMeta } from '../models/artifact-meta-models.ts';
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material';

function LinkContent(props: { title: string; description: string; faviconSrc: string; domain: string }) {
  return (
    <CardContent>
      <Stack spacing={2}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>

        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          {props.faviconSrc && <Avatar src={props.faviconSrc} />}
          <Link href={`https://${props.domain}`}>{props.domain}</Link>
        </Stack>
      </Stack>
    </CardContent>
  );
}

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
