import { useEffect } from 'react';
import Stimulsoft from 'stimulsoft-reports-js';


function StimulsoftPage() {
    useEffect(() => {
        // Stimulsoft.Base.StiLicense.loadFromFile('./license.key');
        // Stimulsoft.Base.StiLicense.key = 'YOUR_LICENSE_KEY';
        // Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile('/path/to/localization.xml');
        
        const report = new Stimulsoft.Report.StiReport();
        report.loadFile('/stimulsoft/reports/test.mrt');
        report.renderAsync();
    
        const viewer = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
        viewer.report = report;
        viewer.renderHtml('viewerContainer');
      }, []);
    
      // Rest of your component code
    
      return (
        <div id="viewerContainer"></div>
      );
}

export default StimulsoftPage
