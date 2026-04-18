namespace LigetNapok_WindowsForms
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            dataGridView1 = new DataGridView();
            cimColumn = new DataGridViewTextBoxColumn();
            DatumColumn = new DataGridViewTextBoxColumn();
            HelyszinColumn = new DataGridViewTextBoxColumn();
            KategoriaColumn = new DataGridViewTextBoxColumn();
            ResztvevokColumn = new DataGridViewTextBoxColumn();
            comboBox1 = new ComboBox();
            SzuresButton = new Button();
            ÖsszesButton = new Button();
            menuStrip1 = new MenuStrip();
            újEseményToolStripMenuItem = new ToolStripMenuItem();
            kilépésToolStripMenuItem = new ToolStripMenuItem();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).BeginInit();
            menuStrip1.SuspendLayout();
            SuspendLayout();
            // 
            // dataGridView1
            // 
            dataGridView1.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView1.Columns.AddRange(new DataGridViewColumn[] { cimColumn, DatumColumn, HelyszinColumn, KategoriaColumn, ResztvevokColumn });
            dataGridView1.Location = new Point(12, 88);
            dataGridView1.Name = "dataGridView1";
            dataGridView1.Size = new Size(768, 222);
            dataGridView1.TabIndex = 0;
            // 
            // cimColumn
            // 
            cimColumn.HeaderText = "Cím";
            cimColumn.Name = "cimColumn";
            // 
            // DatumColumn
            // 
            DatumColumn.HeaderText = "Dátum";
            DatumColumn.Name = "DatumColumn";
            // 
            // HelyszinColumn
            // 
            HelyszinColumn.HeaderText = "Helyszín";
            HelyszinColumn.Name = "HelyszinColumn";
            // 
            // KategoriaColumn
            // 
            KategoriaColumn.HeaderText = "Kategória";
            KategoriaColumn.Name = "KategoriaColumn";
            // 
            // ResztvevokColumn
            // 
            ResztvevokColumn.HeaderText = "Résztvevők";
            ResztvevokColumn.Name = "ResztvevokColumn";
            // 
            // comboBox1
            // 
            comboBox1.FormattingEnabled = true;
            comboBox1.Location = new Point(12, 327);
            comboBox1.Name = "comboBox1";
            comboBox1.Size = new Size(121, 23);
            comboBox1.TabIndex = 1;
            comboBox1.Text = "Összes";
            // 
            // SzuresButton
            // 
            SzuresButton.Location = new Point(201, 326);
            SzuresButton.Name = "SzuresButton";
            SzuresButton.Size = new Size(75, 23);
            SzuresButton.TabIndex = 2;
            SzuresButton.Text = "Szűrés";
            SzuresButton.UseVisualStyleBackColor = true;
            SzuresButton.Click += SzuresButton_Click;
            // 
            // ÖsszesButton
            // 
            ÖsszesButton.Location = new Point(333, 326);
            ÖsszesButton.Name = "ÖsszesButton";
            ÖsszesButton.Size = new Size(75, 23);
            ÖsszesButton.TabIndex = 3;
            ÖsszesButton.Text = "Összes";
            ÖsszesButton.UseVisualStyleBackColor = true;
            ÖsszesButton.Click += ÖsszesButton_Click;
            // 
            // menuStrip1
            // 
            menuStrip1.Items.AddRange(new ToolStripItem[] { újEseményToolStripMenuItem, kilépésToolStripMenuItem });
            menuStrip1.Location = new Point(0, 0);
            menuStrip1.Name = "menuStrip1";
            menuStrip1.Size = new Size(800, 24);
            menuStrip1.TabIndex = 4;
            menuStrip1.Text = "menuStrip1";
            // 
            // újEseményToolStripMenuItem
            // 
            újEseményToolStripMenuItem.Name = "újEseményToolStripMenuItem";
            újEseményToolStripMenuItem.Size = new Size(80, 20);
            újEseményToolStripMenuItem.Text = "Új esemény";
            újEseményToolStripMenuItem.Click += újEseményToolStripMenuItem_Click;
            // 
            // kilépésToolStripMenuItem
            // 
            kilépésToolStripMenuItem.Name = "kilépésToolStripMenuItem";
            kilépésToolStripMenuItem.Size = new Size(56, 20);
            kilépésToolStripMenuItem.Text = "Kilépés";
            kilépésToolStripMenuItem.Click += kilépésToolStripMenuItem_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(ÖsszesButton);
            Controls.Add(SzuresButton);
            Controls.Add(comboBox1);
            Controls.Add(dataGridView1);
            Controls.Add(menuStrip1);
            MainMenuStrip = menuStrip1;
            Name = "Form1";
            Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)dataGridView1).EndInit();
            menuStrip1.ResumeLayout(false);
            menuStrip1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private DataGridView dataGridView1;
        private DataGridViewTextBoxColumn cimColumn;
        private DataGridViewTextBoxColumn DatumColumn;
        private DataGridViewTextBoxColumn HelyszinColumn;
        private DataGridViewTextBoxColumn KategoriaColumn;
        private DataGridViewTextBoxColumn ResztvevokColumn;
        private ComboBox comboBox1;
        private Button SzuresButton;
        private Button ÖsszesButton;
        private MenuStrip menuStrip1;
        private ToolStripMenuItem újEseményToolStripMenuItem;
        private ToolStripMenuItem kilépésToolStripMenuItem;
    }
}
