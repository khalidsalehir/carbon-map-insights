const DemoVideo = () => (
  <section id="demo-video" className="py-20 px-6">
    <div className="max-w-[900px] mx-auto text-center space-y-8">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
        See CarbonMap in Action
      </h2>
      <div className="rounded-xl overflow-hidden border shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <video
          className="w-full aspect-video"
          controls
          preload="metadata"
          poster=""
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);

export default DemoVideo;
