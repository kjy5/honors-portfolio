import { LinkMeta } from '../models/artifact-meta-models.ts';
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material';

function LinkCard({ linkMeta }: { linkMeta: LinkMeta }) {
  return (
    <Link href={linkMeta.url} underline={'none'}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {linkMeta.imageSrc && (
            <CardMedia component={'img'} height={140} image={linkMeta.imageSrc} alt={linkMeta.title} />
          )}
          <CardContent>
            <Stack spacing={2}>
              <Typography gutterBottom variant="h5" component="div">
                {linkMeta.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {linkMeta.description}
              </Typography>

              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                {linkMeta.faviconSrc && <Avatar src={linkMeta.faviconSrc} />}
                <Link href={`https://${linkMeta.domain}`}>{linkMeta.domain}</Link>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default LinkCard;
