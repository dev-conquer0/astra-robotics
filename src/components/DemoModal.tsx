import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const demoVideoUrl = "https://videos.pexels.com/video-files/4782135/4782135-hd_1920_1080_25fps.mp4";
  const posterUrl = "https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 border-0">
        <DialogHeader className="p-4">
          <DialogTitle>Astra Robotics in Action</DialogTitle>
        </DialogHeader>
        <AspectRatio ratio={16 / 9}>
          {isOpen && (
            <video
              className="w-full h-full rounded-b-lg"
              poster={posterUrl}
              controls
              autoPlay
              playsInline
            >
              <source src={demoVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
}